import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz2ov7bmp.css';
import '../../css/p/p12bzlbrl.css';
import '../../css/j/j24ii1bme.css';
import '../../css/b/bzre8l_um.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz2ov7bmp"/><path class="p12bzlbrl"/><path class="j24ii1bme"/><path class="bzre8l_um"/>`,
		"fallback": "devicon:vsphere-wordmark",
	});
}

export default Component;
