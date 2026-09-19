import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkdja_25n.css';
import '../../css/o/od8zg8baa.css';
import '../../css/k/kgty43fkv.css';
import '../../css/t/tx_e7pbjj.css';
import '../../css/q/qml3nib-h.css';
import '../../css/w/wx33h11xu.css';
import '../../css/t/t4f9gjbct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkdja_25n"/><path class="od8zg8baa"/><rect class="kgty43fkv"/><path class="tx_e7pbjj"/><path class="qml3nib-h"/><path class="wx33h11xu"/><path clip-rule="evenodd" class="t4f9gjbct"/></g>`,
		"fallback": "fluent-emoji-flat:nest-with-eggs",
	});
}

export default Component;
