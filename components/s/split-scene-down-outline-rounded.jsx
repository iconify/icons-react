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
		"content": `<style>.jwxcf_boo {
  fill: currentColor;
  d: path("M5.5 9.116q-.213 0-.357-.144Q5 8.829 5 8.616v-3q0-.691.463-1.153T6.616 4h10.769q.69 0 1.153.463T19 5.616v3q0 .213-.143.356q-.143.144-.357.144t-.357-.144T18 8.616v-3q0-.231-.192-.424T17.384 5H6.616q-.231 0-.424.192T6 5.616v3q0 .213-.143.356q-.144.144-.357.144M6.616 20q-.691 0-1.153-.462T5 18.384V12.5H3.5q-.213 0-.357-.143T3 12t.143-.357t.357-.143h17q.214 0 .357.143T21 12t-.143.357t-.357.143H19v5.885q0 .69-.462 1.152T17.384 20zM6 5h12z");
}
</style><path class="jwxcf_boo"/>`,
		"fallback": "material-symbols-light:split-scene-down-outline-rounded",
	});
}

export default Component;
