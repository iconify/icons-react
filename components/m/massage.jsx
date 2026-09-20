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
		"content": `<style>.rrdrosbhd {
  fill: currentColor;
  d: path("M7.85 13.775Q6.75 13.65 5.888 13T4.6 11.325L2 5l6-3l2 3h5.2q.4 0 .775.163t.65.437L23 12l-1.275.9q-.5.35-1.125.338t-1.175-.313L12.75 9.2L10 9l-.1 1.5l2.4.175l2.175 1.25q.475.25.588.688t-.038.862t-.562.7t-1.013.225zm-4.6 7.2L2.7 19.05l4.75-1.25q1.8-.475 3.825-.888t3.7-.412q1.875 0 3.488.75t3.187 2.025L20.3 20.75q-1.275-1.075-2.637-1.662t-2.688-.588q-1.6 0-3.525.413t-3.475.812z");
}
</style><path class="rrdrosbhd"/>`,
		"fallback": "material-symbols:massage",
	});
}

export default Component;
