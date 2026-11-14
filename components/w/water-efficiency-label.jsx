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
		"content": `<style>.m88bejbpx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.226 9.891q-1.687 2.109 0 4.218l3.9 4.875Q8.14 20.25 9.762 20.25h9.113q3.375 0 3.375-3.375v-9.75q0-3.375-3.375-3.375H9.762q-1.622 0-2.636 1.266zm10.723-2.9q.02-.022.042-.042q.055-.05.118-.089t.132-.064t.142-.037t.147-.008t.146.02q.071.017.138.048t.127.075q.06.043.11.097Q18.25 10.457 18.25 13q0 3.75-3.75 3.75T10.75 13q0-2.543 3.199-6.009");
}
</style><path class="m88bejbpx"/>`,
		"fallback": "uix-solid:water-efficiency-label",
	});
}

export default Component;
