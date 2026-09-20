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
		"content": `<style>.ndy5vpbax {
  fill: currentColor;
  d: path("M7 23q-.5-1-.75-2.45T6 17.6q0-2.475.55-4.088T8 11V6l3-5h.5v5.15q-.25.125-.375.35T11 7q0 .425.288.713T12 8t.713-.288T13 7q0-.275-.125-.5t-.375-.35V1h.5l3 5v5q.925.9 1.463 2.513T18 17.6q0 1.5-.25 2.95T17 23q-1.05-.325-1.675-1.187t-.6-1.963q0-.625.138-1.35T15 17.05q0-1.45-.788-3.05T12 11q-1.4 1.4-2.2 3T9 17.05q0 .725.15 1.45t.175 1.35q0 1.1-.637 1.975T7 23");
}
</style><path class="ndy5vpbax"/>`,
		"fallback": "material-symbols:tools-pliers-wire-stripper",
	});
}

export default Component;
