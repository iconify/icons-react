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
		"content": `<style>.getptd7qp {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm5.846-3.5H12.5l1.93-7.654q.032-.125.05-.215q.02-.09.02-.215q0-.38-.282-.648t-.66-.268H9.5v1h3.962z");
}
</style><path class="getptd7qp"/>`,
		"fallback": "material-symbols-light:looks-7",
	});
}

export default Component;
