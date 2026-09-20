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
		"content": `<style>.ziqogq4pu {
  fill: currentColor;
  d: path("M17.085 9.673H9.342q-1.556 0-2.65 1.058q-1.096 1.058-1.096 2.596t1.095 2.606Q7.787 17 9.342 17h6.754q.214 0 .357.143t.143.357t-.143.357t-.357.143H9.342q-1.963 0-3.355-1.364t-1.39-3.309t1.39-3.3Q7.38 8.673 9.343 8.673h7.743l-2.612-2.611q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16l3.253 3.254q.131.13.184.267t.053.298t-.053.298q-.052.137-.183.268l-3.254 3.253q-.14.14-.344.15t-.364-.15t-.16-.353t.16-.354z");
}
</style><path class="ziqogq4pu"/>`,
		"fallback": "material-symbols-light:redo-rounded",
	});
}

export default Component;
