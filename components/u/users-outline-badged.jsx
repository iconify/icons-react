import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r11jctauv.css';
import '../../css/p/p8uuqvbra.css';
import '../../css/y/ykuulfbfo.css';
import '../../css/n/n-t8hwbmb.css';
import '../../css/o/opjmhvbbr.css';
import '../../css/w/wgltirbwy.css';
import '../../css/c/ci0cbibml.css';
import '../../css/z/z8e-jcclf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged r11jctauv"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged p8uuqvbra"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged ykuulfbfo"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged n-t8hwbmb"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged opjmhvbbr"/><path class="clr-i-outline--badged clr-i-outline-path-6--badged wgltirbwy"/><path class="ci0cbibml clr-i-outline--badged clr-i-outline-path-7--badged"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-8--badged z8e-jcclf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:users-outline-badged",
	});
}

export default Component;
