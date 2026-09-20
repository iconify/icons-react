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
		"content": `<style>.oyyfqbyde {
  fill: currentColor;
  d: path("M2 22V8h4V2h8v4H8v8h2V8h12v14z");
}
</style><path class="oyyfqbyde"/>`,
		"fallback": "material-symbols:markunread-mailbox-sharp",
	});
}

export default Component;
