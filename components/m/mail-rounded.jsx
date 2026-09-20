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
		"content": `<style>.yjafdlbkx {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm7.618-7.078q.108-.038.214-.093l7.229-4.733q.142-.086.185-.235t-.016-.297q-.038-.193-.252-.28q-.213-.086-.413.035L12 11L4.82 6.32q-.2-.122-.404-.052t-.262.276q-.058.154-.015.313t.184.24l7.229 4.732q.106.055.214.093q.109.037.234.037t.234-.037");
}
</style><path class="yjafdlbkx"/>`,
		"fallback": "material-symbols-light:mail-rounded",
	});
}

export default Component;
