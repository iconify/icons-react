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
		"content": `<style>.cuy3ztb2p {
  fill: currentColor;
  d: path("M3 19V5h18v14zm12.879-4.543Q17.5 13.413 17.5 12t-1.621-2.457Q14.258 8.5 12 8.5T8.121 9.543T6.5 12t1.621 2.457T12 15.5t3.879-1.043");
}
</style><path class="cuy3ztb2p"/>`,
		"fallback": "material-symbols-light:vignette-sharp",
	});
}

export default Component;
