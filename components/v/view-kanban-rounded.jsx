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
		"content": `<style>.buwxoxbps {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM7.643 7.644Q7.5 7.788 7.5 8v8q0 .213.144.356t.357.144t.356-.144T8.5 16V8q0-.213-.144-.356T7.999 7.5t-.356.144m8 0Q15.5 7.788 15.5 8v6q0 .213.144.356t.357.144t.356-.144T16.5 14V8q0-.213-.144-.356t-.357-.144t-.356.144m-4 0Q11.5 7.788 11.5 8v3q0 .213.144.356t.357.144t.356-.144T12.5 11V8q0-.213-.144-.356t-.357-.144t-.356.144");
}
</style><path class="buwxoxbps"/>`,
		"fallback": "material-symbols-light:view-kanban-rounded",
	});
}

export default Component;
