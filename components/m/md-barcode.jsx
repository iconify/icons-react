import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kotjj9zeu.css';
import '../../css/x/xt-rj2biq.css';
import '../../css/p/py7p1oj7p.css';
import '../../css/g/g6-iavb4r.css';
import '../../css/b/b1tn-bbru.css';
import '../../css/c/ckuy0x4_i.css';
import '../../css/k/kxk9jzb9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kotjj9zeu"/><path class="xt-rj2biq"/><path class="py7p1oj7p"/><path class="g6-iavb4r"/><path class="b1tn-bbru"/><path class="ckuy0x4_i"/><path class="kxk9jzb9v"/>`,
		"fallback": "ion:md-barcode",
	});
}

export default Component;
