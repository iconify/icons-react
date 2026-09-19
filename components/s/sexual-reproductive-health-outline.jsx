import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_aow478j.css';
import '../../css/t/tesqwp_1z.css';
import '../../css/v/v-og-bc-f.css';
import '../../css/f/fnwanvbri.css';
import '../../css/c/c5vggl7lh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m_aow478j"/><path class="tesqwp_1z"/><path class="v-og-bc-f"/><path class="fnwanvbri"/><path class="c5vggl7lh"/></g>`,
		"fallback": "healthicons:sexual-reproductive-health-outline",
	});
}

export default Component;
