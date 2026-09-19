import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m3ok1mbxt.css';
import '../../css/t/t8_-p0a_v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGW8SYSbEt"><g class="ufeehvblu"><path class="m3ok1mbxt"/><path class="t8_-p0a_v"/></g></mask></defs><path mask="url(#SVGW8SYSbEt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:speaker",
	});
}

export default Component;
