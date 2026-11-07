import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg_-zhtuq.css';
import '../../css/l/l_il2h-zw.css';
import '../../css/l/ltmsysb1k.css';
import '../../css/h/hzz4-tdid.css';
import '../../css/n/na6pblbiv.css';
import '../../css/z/zd6l52a5s.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg_-zhtuq"/><path clip-rule="evenodd" class="l_il2h-zw"/><path class="ltmsysb1k"/><path class="hzz4-tdid"/><path class="na6pblbiv"/><path class="zd6l52a5s"/><path clip-rule="evenodd" class="nbozb93jk"/>`,
		"fallback": "solar:tuning-square-outline",
	});
}

export default Component;
