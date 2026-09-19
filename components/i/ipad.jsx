import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/b7c5wh5qe.css';
import '../../css/o/o5hmfpl1w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeATNtgLq"><g class="s9cl3zbei"><rect class="b7c5wh5qe"/><path class="o5hmfpl1w"/></g></mask></defs><path mask="url(#SVGeATNtgLq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ipad",
	});
}

export default Component;
