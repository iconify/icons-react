import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wvdu4-vmy.css';
import '../../css/h/hny_tqt2a.css';
import '../../css/h/h6jcxqydj.css';
import '../../css/k/k6zktqb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCaLLJb2l"><g class="ufeehvblu"><path class="wvdu4-vmy"/><path class="hny_tqt2a"/><path class="h6jcxqydj"/><path class="k6zktqb0a"/></g></mask></defs><path mask="url(#SVGCaLLJb2l)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:radar-chart",
	});
}

export default Component;
