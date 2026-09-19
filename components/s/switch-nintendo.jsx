import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaa_iq0br.css';
import '../../css/l/l987omshp.css';
import '../../css/x/xoor4lbjp.css';
import '../../css/r/reogbcclv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGG2PvCdvi"><g class="ft5dv1b6b"><path class="zaa_iq0br"/><rect class="l987omshp"/><rect class="xoor4lbjp"/><path class="reogbcclv"/></g></mask></defs><path mask="url(#SVGG2PvCdvi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:switch-nintendo",
	});
}

export default Component;
