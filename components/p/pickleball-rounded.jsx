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
		"content": `<style>.zrrw1k17r {
  fill: currentColor;
  d: path("M9.377 16.721q-.846 0-1.64-.312T6.31 15.47l-3.608-3.62q-.348-.348-.525-.785T2 10.169t.177-.907t.525-.816l3.783-3.802q.348-.348.785-.525t.896-.177t.907.177t.816.545L13.47 8.27q.635.639.952 1.437q.318.798.318 1.65q0 .887-.351 1.761t-1.02 1.562l5.251 5.252q.146.146.156.347t-.156.366t-.354.165t-.353-.165l-5.253-5.252q-.686.67-1.548.998q-.862.33-1.736.33m9.754-7.953q-1.197 0-2.029-.845q-.833-.846-.833-2.043t.833-2.039T19.131 3t2.043.846t.845 2.042t-.845 2.039t-2.043.842");
}
</style><path class="zrrw1k17r"/>`,
		"fallback": "material-symbols-light:pickleball-rounded",
	});
}

export default Component;
