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
		"content": `<style>.xumbeqbcj {
  fill: currentColor;
  d: path("M7 16.539L16.577 12L7 7.462v3.215L11 12l-4 1.323zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="xumbeqbcj"/>`,
		"fallback": "material-symbols-light:outbox-alt",
	});
}

export default Component;
