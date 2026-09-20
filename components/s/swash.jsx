import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jsbx5ubqh {
  fill-rule: evenodd;
  d: path("M16.062 5.23a.558.558 0 1 0 0 1.115a.558.558 0 0 0 0-1.115m-2.788.558a2.788 2.788 0 1 1 5.576 0a2.788 2.788 0 0 1-5.576 0M12 11.443a.557.557 0 1 0 0 1.114a.557.557 0 0 0 0-1.114m-1.972-1.414a2.788 2.788 0 1 1 3.943 3.942a2.788 2.788 0 0 1-3.943-3.942m-2.09 7.626a.557.557 0 1 0 0 1.115a.557.557 0 0 0 0-1.115m-1.972-1.414a2.788 2.788 0 1 1 3.943 3.943a2.788 2.788 0 0 1-3.943-3.943");
}

.km3kkwbxv {
  d: path("M5.789 8.894A3.584 3.584 0 0 1 9.373 5.31h5.017v.956H9.373a2.628 2.628 0 0 0 0 5.257h.956v.955h-.956a3.584 3.584 0 0 1-3.584-3.584m12.424 6.213a3.584 3.584 0 0 1-3.584 3.584H9.612v-.956h5.017a2.628 2.628 0 1 0 0-5.257h-.955v-.955h.955a3.584 3.584 0 0 1 3.584 3.584");
}

.rvcrgdb-s {
  fill: var(--svg-color--3ce35f, #3ce35f);
}
</style><g class="rvcrgdb-s"><path clip-rule="evenodd" class="jsbx5ubqh"/><path class="km3kkwbxv"/></g>`,
		"fallback": "token-branded:swash",
	});
}

export default Component;
