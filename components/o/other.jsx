import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pqn0aix0g.css';
import '../../css/l/lw-duqbbf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGEldDdqf"><g class="s9cl3zbei"><path class="pqn0aix0g"/><path class="lw-duqbbf"/></g></mask></defs><path mask="url(#SVGGEldDdqf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:other",
	});
}

export default Component;
