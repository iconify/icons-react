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
		"content": `<style>.avg5tsb0g {
  fill: currentColor;
  d: path("M7 20h8v-8H7zM3.5 8q.95-2.725 3.288-4.362T12 2q2.05 0 3.888.875T19 5.35V2h2v6h-6V6h1.9q-.975-.975-2.25-1.487T12 4Q9.975 4 8.262 5.075T5.676 8zM5 22V10h12v5l3-3v8l-3-3v5zm2-2v-8z");
}
</style><path class="avg5tsb0g"/>`,
		"fallback": "material-symbols:replace-video-outline-sharp",
	});
}

export default Component;
