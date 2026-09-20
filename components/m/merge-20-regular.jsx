import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m92tkab5v {
  fill: currentColor;
  d: path("M3 5.5a.5.5 0 0 1 .5-.5h1.653c1 0 1.952.428 2.616 1.175l2.21 2.486a2.5 2.5 0 0 0 1.868.839h4.446l-3.647-3.646a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l3.647-3.646h-4.446a2.5 2.5 0 0 0-1.868.84l-2.21 2.485A3.5 3.5 0 0 1 5.153 15H3.5a.5.5 0 0 1 0-1h1.653a2.5 2.5 0 0 0 1.868-.84l2.21-2.485c.238-.268.513-.494.813-.675c-.3-.18-.575-.407-.813-.675L7.021 6.84A2.5 2.5 0 0 0 5.153 6H3.5a.5.5 0 0 1-.5-.5");
}
</style><path class="m92tkab5v"/>`,
		"fallback": "fluent:merge-20-regular",
	});
}

export default Component;
