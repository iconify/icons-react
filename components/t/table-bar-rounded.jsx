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
		"content": `<style>.emgnskb5w {
  fill: currentColor;
  d: path("m6.5 18.725l1-2.475q.225-.575.725-.913T9.35 15H11v-4.025Q7.175 10.85 4.587 9.85T2 7.5q0-1.45 2.925-2.475T12 4q4.175 0 7.088 1.025T22 7.5q0 1.35-2.588 2.35T13 10.975V15h1.65q.6 0 1.113.338t.737.912l1 2.475q.2.45-.088.863t-.787.412q-.275 0-.5-.15t-.35-.425L14.8 17H9.2l-.975 2.425q-.125.275-.35.425t-.5.15q-.5 0-.787-.413t-.088-.862");
}
</style><path class="emgnskb5w"/>`,
		"fallback": "material-symbols:table-bar-rounded",
	});
}

export default Component;
