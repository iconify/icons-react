import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/s/scbyztbuu.css';
import '../../css/m/m_fmg4b0j.css';
import '../../css/e/e8iimmbab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="scbyztbuu"/><path class="m_fmg4b0j"/><path class="e8iimmbab"/></g>`,
		"fallback": "streamline-kameleon-color:movie-film",
	});
}

export default Component;
