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
		"content": `<style>.d9t-w3hmt {
  fill: currentColor;
  d: path("M17.1 14.275L21.575 9.8L23 11.225L18.5 15.7zM1 20v-4.175q.875-.125 1.675-.5T4.2 14.4l1.75 1.875l.7-.7l-1.675-1.8l.388-.388q.187-.187.387-.412l1.7 1.8l.725-.725l-1.725-1.775q.125-.25.263-.512t.237-.563l2.025 2.05l.725-.725L7.375 10.2L8.4 7.35L13.8 2l7.05 7.075L10.5 20z");
}
</style><path class="d9t-w3hmt"/>`,
		"fallback": "material-symbols:podiatry-sharp",
	});
}

export default Component;
