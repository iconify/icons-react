import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/voafui-8n.css';
import '../../css/x/x8p7rvb4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiKumIbEH"><g class="rohhhzb0l"><path class="voafui-8n"/><path class="x8p7rvb4g"/></g></mask></defs><path mask="url(#SVGiKumIbEH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sport",
	});
}

export default Component;
