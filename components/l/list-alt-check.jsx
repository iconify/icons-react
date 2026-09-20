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
		"content": `<style>.k-s0cab2x {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v7.873l-2.746 2.746l-2.029-2.03l-4.096 4.072L12.852 20zm5.576-7.5h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM17.254 21l-2.742-2.723l.713-.708l2.029 2.029l4.057-4.057l.708.713zm-8.59-8.451q.22-.22.22-.549t-.22-.549t-.548-.22q-.33 0-.55.22t-.22.549t.22.549t.55.22t.549-.22m0-3.77q.22-.22.22-.548t-.22-.55t-.55-.22t-.549.22t-.22.55t.22.549t.55.22q.328 0 .549-.22");
}
</style><path class="k-s0cab2x"/>`,
		"fallback": "material-symbols-light:list-alt-check",
	});
}

export default Component;
