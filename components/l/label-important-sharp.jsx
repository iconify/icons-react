import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ca_03fbrh {
  fill: currentColor;
  d: path("m3 19l5.5-7L3 4.98h12.462L21 12l-5.52 7z");
}
</style><path class="ca_03fbrh"/>`,
		"fallback": "material-symbols-light:label-important-sharp",
	});
}

export default Component;
