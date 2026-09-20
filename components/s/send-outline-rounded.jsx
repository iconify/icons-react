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
		"content": `<style>.wwp4he_bv {
  fill: currentColor;
  d: path("m17.646 12.752l-12.515 5.27q-.404.16-.768-.069Q4 17.723 4 17.289V6.712q0-.435.364-.665q.363-.23.767-.068l12.515 5.269q.49.218.49.752t-.49.752M5 17l11.85-5L5 7v3.885L9.846 12L5 13.116zm0 0V7z");
}
</style><path class="wwp4he_bv"/>`,
		"fallback": "material-symbols-light:send-outline-rounded",
	});
}

export default Component;
