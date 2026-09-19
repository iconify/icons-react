import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/iquwcyt8f.css';
import '../../css/d/d3sptcc3n.css';
import '../../css/d/dcn00fqin.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkG8fWc7K"><g class="s9cl3zbei"><path class="iquwcyt8f"/><path class="d3sptcc3n"/><path class="dcn00fqin"/></g></mask></defs><path mask="url(#SVGkG8fWc7K)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:iwatch",
	});
}

export default Component;
