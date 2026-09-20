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
		"content": `<style>.rdv22s0vg {
  fill: currentColor;
  d: path("M2 18V5.923h4.83V5h3.686v.923H22V18zm19-1V6.923H3V17zM3 17V6.923zm3.088-4.49q.22-.222.22-.55t-.222-.548t-.549-.22t-.547.222t-.22.549t.22.548t.55.22t.548-.222");
}
</style><path class="rdv22s0vg"/>`,
		"fallback": "material-symbols-light:mobile-landscape-outline-sharp",
	});
}

export default Component;
