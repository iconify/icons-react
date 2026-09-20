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
		"content": `<style>.uk-b3niip {
  fill: currentColor;
  d: path("M6.2 18h2.6v-.325H7.525L8.85 14h3.35l1.25 3.675h-1.2V18h5.55v-.325h-.775L12.725 6H11.35L7 17.675h-.8zM9 13.625l1.6-4.45l1.475 4.45zM2 22V2h20v20z");
}
</style><path class="uk-b3niip"/>`,
		"fallback": "material-symbols:serif-sharp",
	});
}

export default Component;
