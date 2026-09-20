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
		"content": `<style>.pgxw23b_d {
  fill: currentColor;
  d: path("M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h8.502q.332 0 .632.13t.518.349l4.254 4.254q.218.217.348.517t.131.633v8.501q0 .667-.475 1.141t-1.14.475zM8 16h8q.213 0 .356-.144t.144-.357t-.144-.356T16 15H8q-.213 0-.356.144t-.144.357t.144.356T8 16m0-3.5h8q.213 0 .356-.144t.144-.357t-.144-.356T16 11.5H8q-.213 0-.356.144t-.144.357t.144.356T8 12.5M8 9h4.73q.213 0 .357-.144t.144-.357t-.144-.356T12.731 8H8q-.213 0-.356.144t-.144.357t.144.356T8 9");
}
</style><path class="pgxw23b_d"/>`,
		"fallback": "material-symbols-light:text-snippet-rounded",
	});
}

export default Component;
