import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":198};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f7iidtbfl {
  fill: var(--svg-color--56c5a8, #56c5a8);
  d: path("m29.492 169.994l45.186-81.62l-28.728 27.084L0 61.23zM249.938.603h-62.043l-37.999 56.144V.603H92.985v58.229l30.344 111.834l7.071 26.483h19.496v-49.138z");
}

.iqz33xu4i {
  fill: var(--svg-color--429f87, #429f87);
  d: path("m154.565 138.602l39.246 58.547h62.043l-70.31-103.883zM29.492 169.994l28.736-27.07l45.942 54.225L74.678 88.375l-24.9 40.962z");
}
</style><path class="iqz33xu4i"/><path class="f7iidtbfl"/>`,
		"fallback": "logos:karma",
	});
}

export default Component;
