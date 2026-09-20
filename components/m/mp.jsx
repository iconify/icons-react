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
		"content": `<style>.nnnka_bzf {
  fill: currentColor;
  d: path("M6.308 14.692h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-4.615q0-.327-.22-.548q-.222-.221-.549-.221H7.077q-.327 0-.548.22q-.221.222-.221.549zm7.5 0h.884v-1.5h2.231q.327 0 .548-.22q.221-.222.221-.549v-2.346q0-.327-.22-.548q-.222-.221-.549-.221h-3.115zm.884-2.384v-2.116h2.116v2.116zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="nnnka_bzf"/>`,
		"fallback": "material-symbols-light:mp",
	});
}

export default Component;
