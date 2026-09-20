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
		"content": `<style>.c66oltouw {
  d: path("M64.719 83.416V51.775h126.562v31.641H143.82v138.067h-31.64V83.416z");
}

.g43_gf4-w {
  fill: var(--svg-color--9c4221, #9c4221);
  d: path("M57.528 0v28.764H31.64v198.472h25.888V256H0V0z");
}

.ta4w4pewe {
  fill: var(--svg-color--9c4221, #9c4221);
  d: path("M198.472 0v28.764h25.888v198.472h-25.888V256H256V0z");
}
</style><path class="ta4w4pewe"/><path class="c66oltouw"/><path class="g43_gf4-w"/>`,
		"fallback": "logos:toml",
	});
}

export default Component;
