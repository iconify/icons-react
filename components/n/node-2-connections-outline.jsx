import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nodca_-dr.css';
import '../../css/m/mwe-9d8rn.css';
import '../../css/s/sm9mn1yft.css';
import '../../css/j/jt095ubsn.css';
import '../../css/t/tvibfoxqs.css';
import '../../css/h/hvo_vgb3k.css';
import '../../css/v/vi_91oo9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="nodca_-dr"/><circle class="mwe-9d8rn"/><circle class="sm9mn1yft"/><circle class="jt095ubsn"/><circle class="tvibfoxqs"/><circle class="hvo_vgb3k"/><circle class="vi_91oo9z"/></g>`,
		"fallback": "bitcoin-icons:node-2-connections-outline",
	});
}

export default Component;
