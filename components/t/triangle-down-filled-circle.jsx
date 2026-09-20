import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hdxpysbbn {
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.sp5_txb5b {
  d: path("M6.365 8.5A1 1 0 0 1 7.231 7H18.77a1 1 0 0 1 .866 1.5l-5.769 9.999a1 1 0 0 1-1.732 0zM13 13.997L15.306 10h-4.612z");
}

.v1dheebdz {
  d: path("M13.866 18.499a1 1 0 0 1-1.732 0l-5.769-10A1 1 0 0 1 7.231 7H18.77a1 1 0 0 1 .866 1.5z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="v1dheebdz"/><path class="sp5_txb5b"/><path class="hdxpysbbn"/></g>`,
		"fallback": "pepicons-pop:triangle-down-filled-circle",
	});
}

export default Component;
