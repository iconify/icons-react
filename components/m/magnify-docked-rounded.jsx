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
		"content": `<style>.dfoozvb-w {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm9.884-7.692V13q0 .214.143.357T15 13.5t.357-.143T15.5 13v-1.692h1.692q.214 0 .357-.143t.143-.357t-.143-.357t-.357-.143H15.5V8.616q0-.214-.143-.357T15 8.116t-.357.143t-.143.357v1.692h-1.692q-.214 0-.357.143t-.143.357t.143.357t.357.143zM4 15.616h16v-9q0-.27-.173-.443T19.385 6H4.615q-.269 0-.442.173T4 6.616z");
}
</style><path class="dfoozvb-w"/>`,
		"fallback": "material-symbols-light:magnify-docked-rounded",
	});
}

export default Component;
