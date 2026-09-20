import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ecdi7zimw {
  fill: var(--svg-color--002cf2, #002cf2);
  d: path("M204.812 153.604v51.188H256V256h-51.208v-51.188h-51.188v-51.208zM256 0v51.208h-51.188v51.208h-51.208v51.189h-51.208v-51.209h51.208V51.208h51.188V0z");
}

.ip64_16bk {
  d: path("M51.208 204.792V0H0v256h153.604v-51.208h-51.208z");
}
</style><path class="ecdi7zimw"/><path class="ip64_16bk"/>`,
		"fallback": "logos:livekit-icon",
	});
}

export default Component;
