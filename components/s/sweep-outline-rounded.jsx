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
		"content": `<style>.emn2aobem {
  fill: currentColor;
  d: path("M11 17.5q-.213 0-.356-.144t-.144-.357t.144-.356T11 16.5h4q.213 0 .356.144t.144.357t-.144.356T15 17.5zm-4.95-1.62l8.796-8.796q.146-.146.345-.155t.363.155t.165.357t-.165.357l-8.938 8.944q-.243.243-.566.243t-.565-.243L1.44 12.698q-.147-.146-.153-.347t.158-.367q.166-.165.357-.165t.357.165zM15 13.5q-.213 0-.356-.144t-.144-.357t.144-.356T15 12.5h4q.213 0 .356.144t.144.357t-.144.356T19 13.5zm4-4q-.213 0-.356-.144t-.144-.357t.144-.356T19 8.5h4q.213 0 .356.144t.144.357t-.144.356T23 9.5z");
}
</style><path class="emn2aobem"/>`,
		"fallback": "material-symbols-light:sweep-outline-rounded",
	});
}

export default Component;
