import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rlus9bcvf.css';
import '../../css/b/b9p_odg0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrCT9i6JL"><g class="s9cl3zbei"><path clip-rule="evenodd" class="rlus9bcvf"/><path class="b9p_odg0a"/></g></mask></defs><path mask="url(#SVGrCT9i6JL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mini-sd-card",
	});
}

export default Component;
