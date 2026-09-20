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
		"content": `<style>.w9269-bvf {
  fill: currentColor;
  d: path("M6.192 14.692h2.589l.596-.615V9.904l-.596-.596H6.192zm.804-.803v-3.777h1.577v3.777zm4.125 0v-1.493h1.396v-.804h-1.396v-1.48h2.012v-.804h-2.816v5.384h2.816v-.803zm4.808-.193L14.68 9.308h-.854l1.479 5.379h1.227l1.46-5.38h-.854zM4 20V4h16v16z");
}
</style><path class="w9269-bvf"/>`,
		"fallback": "material-symbols-light:logo-dev-sharp",
	});
}

export default Component;
