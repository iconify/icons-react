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
		"content": `<style>.z5_n9cbrw {
  fill: currentColor;
  d: path("M11 17.5q-.213 0-.356-.144t-.144-.357t.144-.356T11 16.5h4q.213 0 .356.144t.144.357t-.144.356T15 17.5zm-4.95-1.62l8.801-8.801q.146-.146.345-.156t.363.156t.166.356t-.166.357l-8.943 8.95q-.242.242-.566.242t-.566-.242l-4.05-4.048q-.146-.147-.152-.348q-.007-.202.158-.367q.166-.165.357-.165t.357.165zM15 13.5q-.213 0-.356-.144t-.144-.357t.144-.356T15 12.5h4q.213 0 .356.144t.144.357t-.144.356T19 13.5zm4-4q-.213 0-.356-.144t-.144-.357t.144-.356T19 8.5h4q.213 0 .356.144t.144.357t-.144.356T23 9.5z");
}
</style><path class="z5_n9cbrw"/>`,
		"fallback": "material-symbols-light:sweep-rounded",
	});
}

export default Component;
