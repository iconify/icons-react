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
		"content": `<style>.rcqekvhul {
  fill: currentColor;
  d: path("M20.558 21.985L2.04 3.467l.713-.713L21.27 21.27zM6.135 9.904q-1.02 0-1.75-.724q-.731-.724-.731-1.738q0-.78.429-1.388q.428-.608 1.098-.873l3.196 3.196q-.266.67-.873 1.098q-.608.429-1.37.429m15.774 9.169L11.635 8.812l.238-.739q.312-.988 1.155-1.57q.843-.58 1.863-.58q1.013 0 1.85.568t1.155 1.526zM2.15 19l2.873-5.515q.211-.404.587-.637t.836-.233q.485 0 .888.255q.405.255.591.715l.521 1.226q.185.4.687.369t.648-.432l1.198-3.77L19 19z");
}
</style><path class="rcqekvhul"/>`,
		"fallback": "material-symbols-light:landscape-2-off",
	});
}

export default Component;
