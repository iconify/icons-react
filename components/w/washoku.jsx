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
		"content": `<style>.hhgg4abtq {
  fill: currentColor;
  d: path("m7 21l-1.525-4.6q-.9-.5-1.525-1.325t-.9-1.875l-.8-3.2h19.5l-.8 3.2q-.275 1.05-.9 1.875T18.525 16.4L17 21zM20 8H4q0-1.25.863-2.125T6.95 5q.2 0 .425.038t.425.087q.425-.95 1.287-1.537T11 3q1.2 0 2.113.713t1.237 1.862q.475-.5 1.1-.788t1.325-.287q1.35 0 2.288.95T20 7.75z");
}
</style><path class="hhgg4abtq"/>`,
		"fallback": "material-symbols:washoku",
	});
}

export default Component;
