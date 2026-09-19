import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k0_khzzsi.css';
import '../../css/k/kvnld0b2g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmxNVWcwA"><g class="v3_i3wktz"><path class="k0_khzzsi"/><path class="kvnld0b2g"/></g></mask></defs><path mask="url(#SVGmxNVWcwA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sleep",
	});
}

export default Component;
