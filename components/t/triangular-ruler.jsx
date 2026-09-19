import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yq_jd9bzl {
  fill: currentColor;
  d: path("M59.965 2.643L2.643 59.966C1.523 61.085 1.904 62 3.486 62h.737v-2.499h.943V62h1.846v-2.499h.942V62h1.847v-2.499h.942V62h1.846v-4.698h.943V62h2.001v-2.499h.944V62h1.846v-2.499h.942V62h1.847v-2.499h.943V62h1.846v-4.698h.941V62h2.003v-2.499h.942V62h1.847v-2.499h.943V62h1.845v-2.499h.944V62h1.847v-4.698h.941V62h2.003v-2.499h.942V62h1.846v-2.499h.944V62h1.846v-2.499h.942V62h1.847v-4.698h.942V62h2.002v-2.499h.943V62h1.846v-2.499h.943V62h1.846v-2.499h.941V62h1.848v-4.698h.943V62h.34A2.887 2.887 0 0 0 62 59.122V3.486c0-1.583-.917-1.963-2.035-.843M48.717 45.838a2.887 2.887 0 0 1-2.878 2.878H35.564c-1.583 0-1.961-.916-.844-2.034l11.96-11.959c1.119-1.118 2.036-.739 2.036.844z");
}
</style><path class="yq_jd9bzl"/>`,
		"fallback": "emojione-monotone:triangular-ruler",
	});
}

export default Component;
