import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/ez330t4ze.css';
import '../../css/l/lqkoj1b-f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGO3Wn5cUT"><g class="s9cl3zbei"><path class="ez330t4ze"/><path class="lqkoj1b-f"/></g></mask></defs><path mask="url(#SVGO3Wn5cUT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:parallel-gateway",
	});
}

export default Component;
